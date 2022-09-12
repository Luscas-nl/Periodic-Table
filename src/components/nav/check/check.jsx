import './check.css'

function Check(props) {

    function log(){
        console.log("clicou")
    }

    return <button class="filterBtn" type={props.type} onClick={log}>{props.label}</button>
}

export default Check