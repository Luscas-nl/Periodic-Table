import './modal.css'

function ElementModal(props) {

    return(
        <div className="modalContainer" id="modalContainer">
            <div className="modal">
                <p class="elementNumberModal">1</p>
                <h1 class="titleModal">H</h1>
                <p class="descModal">Hidrogênio</p>
                <p class="massModal">1.00794(4)</p>
                <p className="eletroModal">1s1</p>
            </div>
        </div>
    )
}

export default ElementModal