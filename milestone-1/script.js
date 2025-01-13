var exp_div = document.getElementById('experiance');
var exp_btn = document.getElementById('exp_btn');
exp_btn === null || exp_btn === void 0 ? void 0 : exp_btn.addEventListener('click', function () {
    exp_div.classList.toggle('hide');
});
var contact_section = document.getElementById('contact');
var contact_btn = document.getElementById('contact_btn');
contact_btn === null || contact_btn === void 0 ? void 0 : contact_btn.addEventListener('click', function () {
    contact_section.classList.toggle('hide');
});
var edu_section = document.getElementById('education');
var edu_btn = document.getElementById('edu_btn');
edu_btn === null || edu_btn === void 0 ? void 0 : edu_btn.addEventListener('click', function () {
    edu_section.classList.toggle('hide');
});
var skills_section = document.getElementById('skills');
var skills_btn = document.getElementById('skills_btn');
skills_btn === null || skills_btn === void 0 ? void 0 : skills_btn.addEventListener('click', function () {
    skills_section.classList.toggle('hide');
});
var lang_section = document.getElementById('language');
var lang_btn = document.getElementById('lang_btn');
lang_btn === null || lang_btn === void 0 ? void 0 : lang_btn.addEventListener('click', function () {
    lang_section.classList.toggle('hide');
});
var print_btn = document.getElementById('print_btn');
print_btn === null || print_btn === void 0 ? void 0 : print_btn.addEventListener('click', function () {
    window.print();
});
