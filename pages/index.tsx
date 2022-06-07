import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TopContent from '../Components/TopContent'
import Links from '../Components/Links'
import Projects from '../Components/Projects'
import Project from '../Components/Project'
import { projects } from './api/NotionAPI'
import ProjectDetail from '../Components/ProjectDetail'
import ProjectDetailContainer from '../Components/ProjectDetailContainer'

let detailOrder = -1;
let prevOrder = detailOrder;
let changeOrder = false;

const Home: NextPage<Props> = (props) => {
  const [detailStatus, setDetailStatus] = useState(false)
  const [detailChanging, setDetailChanging] = useState(false)
  const [detailIndex, setDetailIndex] = useState(0)



  const ChangeStatus = (status:boolean) => {
    setDetailStatus(status)
    if(!status){
      detailOrder = -1;
    }
  }

  const ChangeDetail = (index:number, order:number) => {
    if(index == detailIndex && !detailStatus) { 
      changeOrder = true
      detailOrder = order+1
      gotoDetail()
    }

    setDetailIndex(index)

    if(prevOrder == order && detailStatus) detailOrder = order
    else if(detailOrder == -1) detailOrder = order+1
    else if(prevOrder < order) detailOrder = order-1;
    else detailOrder = order+1

    changeOrder = true

    gotoDetail()

    prevOrder = order
  }

  function gotoDetail(){
    if(changeOrder){
      window.location.href = "#projectDetail-" + detailOrder;
      changeOrder = false;
    } 
  }

  // useEffect(() => {
  //   if(changeOrder){
  //     window.location.href = "#projectDetail-" + detailOrder;
  //     changeOrder = false;
  //   } 
  // }, [detailIndex])


  return (
    <div className="flex min-h-screen flex-col items-center justify-center scroll-smooth">
      <Head>
        <title>Arif Rahman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center max-w-screen-xl justify-center px-4 sm:px-10 md:px-20">
        <Header />

        <TopContent />


        <Links />

        <div className='flex flex-wrap h-[6px] w-full bg-slate-300 gap-1'>
          <div className='basis-1/2 h-1/2 order-1 bg-red-200'></div>
          <div className='basis-1/2 h-1/2 order-1 bg-red-200'></div>
          <div className='basis-1/3 h-1/2 order-3 bg-green-200'></div>
          <div className='basis-1/3 h-1/2 order-3 bg-green-200'></div>
          <div className='basis-1/3 h-1/2 order-3 bg-green-200'></div>
          <div className='basis-1/3 h-1/2 order-2 bg-sky-200'></div>
          <div className='basis-1/3 h-1/2 order-4 bg-orange-200'></div>
          <div className='basis-1/3 h-1/2 order-5 bg-orange-200'></div>
        </div>

        <Projects header={"My Projects"}>
          {props.projects.map(function(project, i){
            return <Project
                    project={project}
                    active ={detailIndex}
                    changeDetail={ChangeDetail}
                    changeStatus={ChangeStatus}
                    />
          })}
          <ProjectDetailContainer active={detailIndex}
                                  order={-2}
                                  status={detailStatus}
                                  data={props.projects}
                                  statusFunction = {ChangeStatus}
                                  changeDetail={ChangeDetail}>
            {props.projects.map(function(project, i){
                return <ProjectDetail
                        project={project}
                        />
            })}
          </ProjectDetailContainer>
            
          
        </Projects>

        <Footer />

        <div className='h-[1080px]'></div>

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