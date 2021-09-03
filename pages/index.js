import Population_table from '../component/Population_table';
import Layout from '../component/Layout'
import Search from '../component/Search'
import React from 'react'

export default function Home({ api_data }) {
  // console.log(api_data);
  const [inputs, setinputs] = React.useState("");
  const filterhandler = api_data.filter(country => country.name.toLowerCase().includes(inputs)
    || country.region.toLowerCase().includes(inputs)
    || country.subregion.toLowerCase().includes(inputs)
  );

  const onclickhandler = (e) => {
    e.preventDefault();
    setinputs(e.target.value.toLowerCase());
  }

  return (
    <Layout>

      <Search onclickhandler={onclickhandler} />
      <Population_table api_data={filterhandler} />

    </Layout>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://restcountries.eu/rest/v2/all ')
  const api_data = await res.json();
  return {
    props: { api_data },
  }
}

