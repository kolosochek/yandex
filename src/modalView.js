const showModal = () => {
    const modal_window = document.querySelector('#modal_window');
    if (modal_window) {        
        // show modal
        modal_window.classList.toggle('state__visible');
    } else {
        // create modal and show
        const htmlTemplate = `
        <div id='modal_window' class='b-modal-window-wrapper'>
            <div class='b-modal-window'>
                <form class='b-modal-window-content'>
                    <h3 class='b-modal-window-title'>Upload avatar</h3>
                    <a class='b-link' href="#">choose file</a>
                    <input class='b-input' type='file' name='avatar_file' />
                    <button class='b-submit' type='submit'>Change file</button>
                </form>
            </div>
        </div>
        `
        // append template to <body />
        document.body.insertAdjacentHTML('afterBegin', htmlTemplate);
        const modal_window = document.querySelector('#modal_window');
        modal_window.classList.toggle('state__visible');

        // close modal on parent container click
        modal_window.addEventListener('click', () => {
            modal_window.classList.toggle('state__visible');
        });
    }

    const upload_file_link = document.querySelector('#modal_window .b-link');
    const file_input = document.querySelector('#modal_window .b-input');

    if (upload_file_link && file_input){
        upload_file_link.addEventListener('click', (e) => {
            e.preventDefault();
            file_input.click();
        });
    }
}