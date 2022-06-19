import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

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

let anchorOrder = -1;
let prevOrder = anchorOrder;
let changeOrder = false;

const Home: NextPage<Props> = (props) => {
  const [detailStatus, setDetailStatus] = useState(false)
  const [detailChanging, setDetailChanging] = useState(false)
  const [detailIndex, setDetailIndex] = useState(0)
  const [isMobileSized, setMobileSizeBool] = useState(true)

  function IsMobileSized(){
    const size = useWindowDimension();
    if (typeof size == "undefined") {
        return false;
    }
    let bool = true
    if(size[0] > 1024) bool = false
    if(isMobileSized != bool) setMobileSizeBool(bool)
    return bool
  }

  let burn = IsMobileSized()


  let detailOrder = prevOrder + 1
  if(isMobileSized){
    detailOrder = 999
  }

  const ChangeStatus = (status:boolean) => {
    setDetailStatus(status)
    if(!status){
      anchorOrder = -1;
    }
  }

  const ChangeDetail = (index:number, order:number) => {
    if(index == detailIndex && !detailStatus) { 
      changeOrder = true
      anchorOrder = order+1
      gotoAnchor(anchorOrder, true)
    }

    setDetailIndex(index)

    if(isMobileSized) anchorOrder = 999;
    else if(prevOrder == order && detailStatus) anchorOrder = order
    else if(anchorOrder == -1) anchorOrder = order+1
    else if(prevOrder < order) anchorOrder = order-1;
    else anchorOrder = order+1

    changeOrder = true

    gotoAnchor(anchorOrder, true)

    prevOrder = order
  }

  function gotoAnchor(anchorOrder:number, detail:boolean){
    if(changeOrder || !detail){
      let element
      if(!detail) element = document.getElementById('top');
      else element = document.getElementById(`projectDetail-${anchorOrder}`);
      if(element == null) return;
      element.scrollIntoView({
          block: 'start',
          behavior: 'smooth' // smooth scroll
      }) 
    }
    // if(!detail) window.location.href = "#"
    // else if(changeOrder){
    //   window.location.href = "#projectDetail-" + anchorOrder;
    //   changeOrder = false;
    // } 
  }

  // To go back to top when reloading
  useEffect(() => {
    window.addEventListener("beforeunload", goBack);
    return () => {
      gotoAnchor(0, false)
      window.removeEventListener("beforeunload", goBack);
    };
  }, []);
  const goBack = (e:any) => {
    
  };
  


  return (
    <div className="flex min-h-screen flex-col relative items-center justify-center scroll-smooth -mx-10 bg-slate-100">
      <Head>
        <title>Arif Rahman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex w-full justify-center px-20 z-10">
        <div className='flex w-full flex-1 flex-col items-center max-w-screen-xl justify-center -mx-6 sm:mx-4 md:mx-14'>
          <Header />
          <TopContent />

          <Links />

          

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
                                        order={detailOrder}
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

          <Footer />

          <div className='h-[1080px]'></div>
        </div>
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