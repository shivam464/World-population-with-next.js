import style from '../../styles/country.module.css'
import Button from '@material-ui/core/Button';
import Head from "next/head"
import img from '../../public/favicon.ico'

const Country = ({ data }) => {
    
    return (
        <div className={style.main_container}>
        <Head>
                <title>{data.name}:Details</title>
                <meta name="description" content={`${data.name} Population`} />
                <link rel="icon" href="../../public/favicon.ico" />
            </Head>
            <div className={style.container}>
                <div className={style.image_div}>
                    <img src={data.flag} alt="country image" />
                </div>

                <div className={style.details}>
                    <div><span>Name :- </span><p>{data.name}</p></div>
                    <div><span>NativeName :- </span> <p>{data.nativeName}</p> </div>
                    <div><span>Total Population :- </span> <p>{data.population}</p> </div>
                    <div><span>Capital  :- </span> <p>{data.capital}</p> </div>
                    <div><span>Currencies  :- </span> <p>{data.currencies[0].name}<span>{data.currencies[0].symbol}</span></p> </div>
                    <div><span>Languages  :- </span>
                        {data.languages.map(language => <p>{language.name}</p>)}
                    </div>
                    <div><span>Region  :- </span> <p>{data.region}</p> </div>
                </div>

            </div>
            <Button variant="contained" href="/" >Go Back</Button>
        </div>

    )
}
export default Country;

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`);
    const data = await res.json();
    return {
        props: { data },
    }
}