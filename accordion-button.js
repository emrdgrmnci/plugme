document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            button.classList.toggle('is-open');

            if (button.classList.contains('is-open')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

            // Set aria-expanded attribute based on the presence of 'is-open' class
            button.setAttribute('aria-expanded', button.classList.contains('is-open'));
        });
    });
});      