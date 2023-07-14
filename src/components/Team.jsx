import Profile from "./Profile"
import SectionTitle from "./SectionTitle"
import '../css/main.css'

function Team() {
    return (
        <section className="section-light py-5">
            <div className="container">
                <div className="row">
                    <SectionTitle title="People" />
                    <Profile 
                        img="img/profiles/1.jpg" 
                        title="Amanda" 
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum accusantium blanditiis illo hic perspiciatis itaque officia. Nostrum eligendi fuga sit neque laborum sint facere consectetur odit, quas eos odio? " 
                    />

                    <Profile 
                        img="img/profiles/2.jpg" 
                        title="Larissa" 
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, est quos. Dignissimos unde earum consectetur aperiam ipsam nisi reprehenderit, aliquid error placeat repellendus rerum repellat expedita quas adipisci aliquam? Libero?" 
                    />

                    <Profile 
                        img="img/profiles/3.jpg" 
                        title="Samanta" 
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, eligendi magni amet quo rem minima. Corporis, minus, perspiciatis porro facilis soluta natus esse reprehenderit rem dolorum modi beatae veritatis alias!" 
                    />
                </div>
            </div>
        </section>
        
    )
}

export default Team
