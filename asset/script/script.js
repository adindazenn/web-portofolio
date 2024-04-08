const fields = ['name', 'role', 'availability', 'usia', 'lokasi', 'pengalaman', 'email'];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        fields.forEach(updateField);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

const updateField = (field) => {
    const element = document.getElementById(field);
    document.querySelector(`#${field}-value`).innerHTML = element.value;
};
