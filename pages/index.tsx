import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TopContent from '../Components/TopContent'
import Links from '../Components/Links'
import Projects from '../Components/Projects'
import Project from '../Components/Project'
import { projects } from './api/NotionAPI'
import ProjectDetail from '../Components/ProjectDetail'


const Home: NextPage<Props> = (props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Arif Rahman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center max-w-screen-xl justify-center px-4 sm:px-10 md:px-20  ">
        <Header />

        <TopContent />


        <Links />

        <Projects header={"My Projects"}>
          {props.projects.map(function(project, i){
            return <Project
                    title = {project.properties.Name.title[0]?.plain_text}
                    description = {project.properties.Description.rich_text[0]?.plain_text}
                    link = {project.properties.Link.url}
                    image_url = {project.properties.Images.files[0]?.file?.url}
                    type = {project.properties.Type.select?.name}
                    position = {project.properties.Position?.number}
                    />
          })}
          <ProjectDetail
            title = {props.projects[0].properties.Name.title[0]?.plain_text}
            description = {props.projects[0].properties.Description.rich_text[0]?.plain_text}
            link = {props.projects[0].properties.Link.url}
            image_url = {props.projects[0].properties.Images.files[0]?.file?.url}
            type = {props.projects[0].properties.Type.select?.name}
            position = {props.projects[0].properties.Position?.number}
            />
        </Projects>

        <Footer />

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home

export async function getStaticProps(){
  const fetchedProjects = await projects();

  return {
    props:{
      projects: fetchedProjects,
    }
  }
}

interface Props {
  projects: [any],
}