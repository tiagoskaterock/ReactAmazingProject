import '../css/cta.css'

function Cta() {

    function handleClick() {
        alert('Congratulations! You are now subscribed to our Newsletter!!!')
    }

    return (
        <section className="text-center section-cta">
            <button className="btn btn-primary" onClick={handleClick}>
                <i className="fas fa-rss mr-1"></i>
                Subscribe me!
            </button>
        </section>        
    )
}

export default Cta
