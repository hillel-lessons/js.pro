// Сохранение в LocalStorage реализовать не получилось, можно раскоментировать строчку 160

class Map {
    constructor(selector, lat = 48.494631299999995, lng = 30.7243991, zoom = 11) {
        this.selector = selector;
        this.lat = lat;
        this.lng = lng;
        this.zoom = zoom;
        this.map = null;
        this.markers = [];
        this.isFavorite = false;

        this.initAllMethods();
    }

    getLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;

                    this.map.setCenter({lat: this.lat, lng: this.lng});
                },
                err => console.warn('An error has occured while retrieving location. Set default coords!', err)
            );
        } else {
            console.log('geolocation is not enabled on this browser')
        }
    }

    initMap() {
        const myLatLng = {lat: this.lat, lng: this.lng};

        this.map = new google.maps.Map(document.querySelector(this.selector), {
            zoom: this.zoom,
            center: myLatLng
        });
        this.map['id'] = this.generateId();
    }

    favorite() {
        document.querySelector('.sidebar__list').addEventListener('click', (event) => {
            if (event.target.classList.contains('btn-fav')) {
                this.markers[this.elemIndex]['favorite'] = !this.markers[this.elemIndex]['favorite'];
                (this.markers[this.elemIndex]['favorite']) ? event.target.innerText = 'Убрать из избранного' : event.target.innerText = 'В избранное';
            }
        });
    }

    addMarker() {
        const btn = {
            add: document.querySelector('.btn-add'),
            cancel: document.querySelector('.btn-cancel'),
            save: document.querySelector('.btn-save')
        };
        const markerName = document.querySelector('.marker-name');
        let addMode = false;
        let marker = null;

        btn.add.addEventListener('click', () => {
            addMode = true;
            document.querySelector('.sidebar').classList.add('sidebar--add-mode');
            document.body.classList.add('mode-add');
        });

        btn.cancel.addEventListener('click', () => {
            addMode = false;
            document.querySelector('.sidebar').classList.remove('sidebar--add-mode');
            document.body.classList.remove('mode-add');
        });

        btn.save.addEventListener('click', () => {
            if (markerName.value.length && marker) {
                marker['favorite'] = false;
                marker['markerName'] = markerName.value;
                marker['id'] = this.generateId();

                this.markers.push(marker);
                this.addMarkerToList(marker);

                marker = null;
                markerName.value = '';
                this.saveMarkers();
            } else {
                alert('Вы не ввели название или не поставили маркет!');
            }
        });

        this.map.addListener('click', (event) => {
            if (addMode && marker === null) {
                marker = new google.maps.Marker({
                    position: event.latLng,
                    map: this.map
                });

                JSON.stringify(marker.toString());
            }
        });
    }

    addMarkerToList(marker) {
        const template = `
            <div class="sidebar__list">
                <section data-id="${marker.id}" class="sidebar__item">
                    <span>${marker.markerName}</span>
                    <div class="sidebar__item-controls">
                        <button class="btn-edit">Редактировать</button>
                        <button class="btn-fav">В избранное</button>
                        <button class="btn-delete">Удалить</button>
                    </div>
                    <div class="sidebar__item-edit">
                        <input class="item-edit">
                        <button class="btn-edit-save">Сохранить</button>
                        <button class="btn-edit-cancel">Отменить</button>
                    </div>
                </section>
            </div>
        `;

        document.querySelector('.sidebar__list').innerHTML += template;
    }

    deleteMarker() {
        document.querySelector('.sidebar__list').addEventListener('click', (event) => {
            if (event.target.classList.contains('btn-delete')) {
                const id = parseInt(event.target.closest('.sidebar__item').getAttribute('data-id'));

                this.markers[this.elemIndex].setMap(null);
                this.markers.splice(this.elemIndex, 1);
                document.querySelector(`.sidebar__item[data-id='${id}']`).remove();
                this.saveMarkers();
            }
        });
    }

    editMarker() {
        document.querySelector('.sidebar__list').addEventListener('click', (event) => {
            const item = event.target.closest('.sidebar__item');
            const input = item.querySelector('.item-edit');

            if (event.target.classList.contains('btn-edit')) {
                item.classList.add('sidebar__item--edit-mode');
                input.value = item.querySelector('span').innerText;
            }

            if (event.target.classList.contains('btn-edit-cancel')) {
                const item = event.target.closest('.sidebar__item');
                item.classList.remove('sidebar__item--edit-mode');
            }

            if (event.target.classList.contains('btn-edit-save')) {
                this.markers[this.elemIndex].markerName = input.value;
                item.querySelector('span').innerHTML = input.value;
                item.classList.remove('sidebar__item--edit-mode');
            }

            this.saveMarkers();
        });
    }

    generateId() {
        const today = new Date();
        return parseInt(`${today.getDay()}${today.getHours()}${today.getSeconds()} ${today.getMilliseconds()}`);
    }

    get elemIndex() {
        const item = event.target.closest('.sidebar__item');
        const id = parseInt(item.getAttribute('data-id'));
        return this.markers.findIndex((item) => item.id === id);
    }

    saveMarkers() {
        //localStorage.setItem(`map-${this.map['id']}`, JSON.stringify(this.markers));
    }

    initAllMethods() {
        this.getLocation();
        this.initMap();
        this.addMarker();
        this.deleteMarker();
        this.editMarker();
        this.favorite();
    }
}

new Map('#map');