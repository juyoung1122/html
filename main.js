document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelectorAll('#todo-list input[type="checkbox"]');

    list.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const label = checkbox.parentElement;
            if (checkbox.checked) {
                label.classList.add('completed');
            } else {
                label.classList.remove('completed');
            }
        });
    });
});
