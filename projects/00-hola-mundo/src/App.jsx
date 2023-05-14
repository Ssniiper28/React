import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    return (
        <section className='app'>
            <TwitterFollowCard  
                userName="Jerry_Tapado"  
                src="https://pps.whatsapp.net/v/t61.24694-24/343555219_891492375244929_4231338113812409955_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQJRMP39vuLThg2VCIP1MPXivllcjoLsNtcjaFDwHSyyQ&oe=646BE09F" 
                >
                    Jerry
            </TwitterFollowCard>
            <TwitterFollowCard 
                userName="Rata_Blanca" 
                src="https://pps.whatsapp.net/v/t61.24694-24/218417169_663124408505347_1579002157588009289_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTmb7xmLF57835t7AJy1wdL3vRmd8CFl4RFLQJA_8sGuw&oe=64657B3C"
                >
                    RataBlanca
                </TwitterFollowCard>
        </section>
    )
}