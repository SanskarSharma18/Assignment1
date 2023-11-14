/*
    Assignment 05
*/
$(document).ready(function () {
    // your code here
    class ContentItem {
        constructor(id, name, description, categoryGenre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }

        updateContentItem(id, name, description, categoryGenre) {
            if (this.id === id) {
                if (name !== null && description !== null && categoryGenre !== null) {
                    this.name = name;
                    this.description = description;
                    this.categoryGenre = categoryGenre;
                }
            }
        }

        toString() {
            return `
            <div id="content-item-${this.id}" class="content-item-wrapper">
              <h2>${this.name}</h2>
              <p>${this.description}</p>
              <div>${this.categoryGenre}</div>
            </div>
          `;
        }
    }

    const items = [
        new ContentItem(0, "Mission to Mars", "Join us in our mission to explore the Red Planet.", "Space Exploration"),
		new ContentItem(1, "Galactic Wonders", "Discover the breathtaking beauty of our galaxy.", "Astronomy"),
		new ContentItem(2, "Journey to the Moon", "Relive the historic moon landing and learn about humanity's first steps on the lunar surface.", "Lunar Exploration"),
		new ContentItem(3, "Living in Space", "Experience life aboard the International Space Station.", "Space Living"),
		new ContentItem(4, "The Search for Extraterrestrial Life", "Explore the ongoing quest to find life beyond Earth.", "Astrobiology"),
    ];


    items.forEach(item => {
        $('#content-item-list').append(item.toString());
    });

    $('.content-item-wrapper').css({
        border: '1px solid #ccc',
        width: '80%',
        padding: '10px',
        margin: '10px auto 10px auto'
    });

    $('#update-success').click(function () {
        const item = items[0];
        item.updateContentItem(0, 'New Name', 'New Description', "New Category");
        $('#content-item-list').html('');
        items.forEach(item => {
            $('#content-item-list').append(item.toString());
            $('.content-item-wrapper').css({
                border: '1px solid #ccc',
                width: '80%',
                padding: '10px',
                margin: '10px auto 10px auto'
            });
        });
    });

    $('#update-failure').click(function () {
        const item = items[0];
        // wrong id
        item.updateContentItem(1, 'New Name', 'New Description', "New Category");
        $('#content-item-list').html('');
        items.forEach(item => {
            $('#content-item-list').append(item.toString());
            $('.content-item-wrapper').css({
                border: '1px solid #ccc',
                width: '80%',
                padding: '10px',
                margin: '10px auto 10px auto'
            });
        });
    });
});


