import SearchIcon from '@material-ui/icons/Search';
import Image from 'next/image'
import profilePic from '../public/logo-1.png'
import style from '../styles/Search.module.css'

const Search = ({ onclickhandler }) => {
    return (
        <div className={style.Search_div}>
            <div className={style.image_div}>
                <Image src={profilePic} alt="Picture of the author" width={50} height={50} />
            </div>
            <div className={style.input_div}>
                <SearchIcon />
                <input type="text" placeholder="Search The Country" onChange={onclickhandler} />
            </div>

        </div>
    )
}

export default Search;
