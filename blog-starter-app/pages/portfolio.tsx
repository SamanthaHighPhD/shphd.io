import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Header1 from '../components/header'
import Header2 from '../components/header2'

export default function Portfolio() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Samantha High Ph.D. Portfolio`}</title>
        </Head>
        <Container>
          <Header1 />
          <Header2 />
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">Samantha High's Portfolio</h1>
            <img className='shadow-sm w-full mb-6' src="/assets/blog/banners/Rainbow06Purple.jpg" alt="banner" />
          </div>
          <div className='max-w-6xl mx-auto text-lg'>
            During my tenure at Oregon State University, I had the privilege of working on a wide range of projects that have enriched my skills and provided valuable hands-on experience. 
            While I am unable to share specific solutions due to confidentiality, I would like to highlight some noteworthy endeavors that have shaped my proficiency in various technologies and problem-solving.
            <h2 className='mt-4 font-bold'>Exploring the World of Computer Science: </h2>
            In my Introduction to Computer Science courses, I delved into the realm of Python, immersing myself in exciting projects that included developing text-based games. These projects allowed me to 
            strengthen my programming skills while honing my ability to create engaging and interactive experiences.
            <h2 className='mt-4 font-bold'>Web-Based Applications: Powering User Experiences:</h2>
            As my academic journey progressed, I had the opportunity to work on web-based applications using a diverse set of technologies. With JavaScript, NodeJS, ReactJS, HTML, and CSS at my disposal, 
            I embarked on projects that pushed the boundaries of what could be achieved in the digital landscape. Through these endeavors, I learned how to build intuitive user interfaces, leverage powerful 
            frameworks, and deliver seamless web experiences.
            <h2 className='mt-4 font-bold'>Empowering Businesses with Database Solutions:</h2>
            One standout project from my time at Oregon State University was undertaken during my Introduction to Databases course. Collaborating with a partner, we developed a comprehensive application that empowered a 
            fictional store to effectively track their inventory and transactions. This undertaking involved meticulous project planning, creating an Entity-Relationship Diagram (ERD) schema, implementing CRUD functionality, 
            and populating the database with sample data. The culmination of this effort can be found in the final report, accessible through this link: 
            <a href="/assets/blog/portfolio/Moogle Marketplace Sales & Inventory Database Portfolio Assignment.pdf" className='text-[#2f31c2]'> Moogle Marketplace Sales & Inventory Database Portfolio Project</a>.
            <h2 className='mt-4 font-bold'>Exploring the Depths of Computer Architecture:</h2>
            One of my most memorable courses at OSU was Computer Architectures and Assembly Language, which provided an immersive learning experience in x86 assembly language. Through various assignments, 
            I delved into the intricacies of this low-level programming language, implementing Macros, working with different data types and structures, and mastering the art of passing parameters on the stack. 
            This course equipped me with a profound understanding of computer architecture and the skills to optimize code at its fundamental level.
            <h2 className='mt-4 font-bold'>Operating Systems and Linux Mastery:</h2>
            In the Operating Systems course, I further honed my programming skills through hands-on experience with C and continued to deepen my knowledge of Linux. As an avid Linux user for over two decades, 
            I entered the course well-prepared. I engaged in a range of projects that showcased my expertise, including writing a Base64 encoder, developing a custom shell in C, creating a program to list files 
            and directories in a tree format, and implementing encryption and decryption algorithms. Additionally, I delved into multi-threading, synchronization, and mutual exclusion concepts, solidifying my 
            understanding of concurrent programming.
            <h2 className='mt-4 font-bold'>Crafting User-Centric Applications:</h2>
            In the Introduction to Usability Engineering course, I collaborated with a dynamic team to develop a novel application that prioritized user-friendliness and seamless interactions. Leveraging
            Figma, we meticulously designed and refined our application, incorporating valuable feedback from our peers throughout the development lifecycle. Our dedication to usability engineering resulted
            in a remarkable product that truly resonated with users. For an in-depth look at our process and outcomes, please refer to the final report linked here:  
            <a href="/assets/blog/portfolio/CS 352 Final Prototype Presentation Samantha High.pdf" className='text-[#2f31c2]'> SwapMeep</a>.
            <h2 className='mt-4 font-bold'>Unleashing Creativity in Computer Graphics:</h2>
            My Introduction to Computer Graphics course served as a platform for further advancing my C and C++ programming skills while exploring the power of OpenGL. Throughout the course, I immersed myself 
            in the creation of 3D objects and scenes, animating captivating visual narratives, and mastering texture mapping, lighting, shaders, and geometric modeling. The result was a 
            collection of awe-inspiring projects that brought my creative visions to life, as seen below. 
            <div className="py-2 flex flex-row justify-center items-center">
            <img className='justify-center items-center' src="/assets/blog/portfolio/GraphicsProjects.png" alt="Project2Screenshot1" />
            </div>
            <br />
          </div>
        </Container>
      </Layout>
    </>
  )
}


