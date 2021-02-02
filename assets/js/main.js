/* Navigation Menu */
var container = document.querySelector('.container');
var hamburger_menu = document.querySelectorAll('.hamburger-menu-wrap');
hamburger_menu.forEach(element => {
    element.addEventListener('click', () => {
        container.classList.toggle('open')
    });
});





/*Custom Select Option */
$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
}, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
    $('html').one('click', function() {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});



// {JSON} Placeholder API


const [post1, post2, post3, post4] = [document.querySelector('.urgent-item'), document.querySelector('.warning-item'), document.querySelector('.opportunity-item'), document.querySelector('.perfect-item')]
const getRequest = async() => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        post1.querySelector('.filter-result-desc').textContent = response.data[0].title
        post2.querySelector('.filter-result-desc').textContent = response.data[1].title
        post3.querySelector('.filter-result-desc').textContent = response.data[2].title
        post4.querySelector('.filter-result-desc').textContent = response.data[3].title
    } catch (err) {
        console.error(err);
    }
};

getRequest()