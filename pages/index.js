import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex justify-center py-20">
      <div className='max-w-xl'>
        <div className='w-auto about'>
          <p>Rausyan Fiqrussalam here! I am Informatics Engineer fresh graduate who love challenge! i like to work as frontend engineer.</p>
        </div>
        <div className='w-auto experience pt-20'>
          <h1>Experience</h1>
          <div className="my-8">
            <h2>Citra Nusantara Gemilang</h2>
            <p>as video recorder and editor intern,  i made two videos for their internal purpose. those video are Health and Safety Environment (HSE) guide for visitors at the plant station, and HSE guide for compressed natural gas replacement at customer. </p>
            <p>as graphic designer intern,  made and integrate product logo (Gasra) into their new collateral design. </p>
            <h2>Unit Pengelolaan dan Pengendalian Program - ITS</h2>
            <p>as frontend developer intern, i made dashboard using Vue as frontend framework and GraphJS for shows graph data from internal database (Students, Lecturer, Publications).</p>
            <h2>Kognisio</h2>
            <p>as frontend developer intern, i add event poster image on their webinar registration page.</p>
          </div>
        </div>
        <div className='w-auto projects pt-20'>
          <h1>Projects</h1>
          <div className="my-8">
            <h2>This Site</h2>
            <p>this site was made using Nextjs. a React-based frontend framework</p>
            <h2>Virtual Reality For Interactive Researchers Data Visualization</h2>
            <p>virtual reality application that used Oculus Quest 2 as its main component for interacting with researchers data. this application made with Unity, C#,VRTK as client component, and Microsoft SQL Server, Flask as server component.</p>
          </div>
        </div>  
        <div className='w-auto contact pt-20'>
          <h1>Contact</h1>
          <div className="my-8">
            <a href='https://github.com/noieda'>github</a><br />
            <a href='https://www.linkedin.com/in/rausyan-fiqrussalam/'>linkedin</a>
            <p>rausyanfiqrussalam@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
