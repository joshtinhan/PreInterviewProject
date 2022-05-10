import Header from '@/layouts/header'
import Webinar from '@/components/panel/webinar'
import Register from '@/components/panel/register'
import {
    StyleBannerSection,
    StyleWebinarsContainer,
    StyleRegisterSection,
    StyleContainer,
    StyleWebinarsSection,
} from './style'
const Container = () => (
    <>
        <StyleContainer>
            <StyleBannerSection>
                <h2>Forex Webinars</h2>
                <p>
                    Whether you are new to foreign exchange trading or already
                    have some market experience, we believe that a solid FX
                    trading education is vital to your success as a trader.
                </p>
            </StyleBannerSection>
        </StyleContainer>
        <StyleWebinarsContainer>
            <StyleContainer>
                <StyleWebinarsSection>
                    {[0, 0, 0, 0, 0, 0].map(() => (
                        <Webinar webinarData={{}} />
                    ))}
                </StyleWebinarsSection>
            </StyleContainer>
        </StyleWebinarsContainer>
        <StyleContainer>
            <StyleRegisterSection>
                <Register topics='123445' />
            </StyleRegisterSection>
        </StyleContainer>
    </>
)

const Home = () => {
    return (
        <>
            <StyleContainer>
                <Header currentRoutes='home' />
            </StyleContainer>
            <Container />
        </>
    )
}

export default Home
