import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.scss'

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Header />
            <div className="home-container">
                <Featured />
                <h1 className="home-title">Browse by property type</h1>
                <PropertyList />
                <h1 className="home-title">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home