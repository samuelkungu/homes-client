import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './list.scss'

function List() {
    return (
        <div className='list'>
            <Navbar />
            <Header type="list" />
        </div>
    )
}

export default List