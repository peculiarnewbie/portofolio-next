import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import TopContent from '../components/TopContent'
import Links from '../components/Links'
import Projects from '../components/Projects'
import Project from '../components/Project'
import { projects } from './api/NotionAPI'
import ProjectDetail from '../components/ProjectDetail'
import ProjectDetailContainer from '../components/ProjectDetailContainer'
import useWindowDimension from '../components/functions/useWindowDimension'

let detailOrder = -1;
let prevOrder = detailOrder;
let changeOrder = false;

const Home: NextPage<Props> = (props) => {
  const [detailStatus, setDetailStatus] = useState(false)
  const [detailChanging, setDetailChanging] = useState(false)
  const [detailIndex, setDetailIndex] = useState(0)

  function IsMobileSized(){
    const size = useWindowDimension();
    if (typeof size == "undefined") {
        return;
    }
    let bool = true
    if(size[0] > 1024) bool = false
    return bool
  }

  let isMobileSized = IsMobileSized()

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

    if(isMobileSized) detailOrder = 999;
    else if(prevOrder == order && detailStatus) detailOrder = order
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
                                  changeDetail={ChangeDetail}
                                  isMobileSize={isMobileSized}>
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
          href="https://peculiarnewbie.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
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
    },
    revalidate: 10,
  }
}

interface Props {
  projects: [any],
}