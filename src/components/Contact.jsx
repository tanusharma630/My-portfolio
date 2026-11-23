 

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen overflow-hidden bg-[#B8B1F2] px-6 py-16 text-[#25233A]">

      <div className="absolute right-12 top-16 text-5xl text-[#FFF9F5]">
        ✦
      </div>

  
      <div className="relative z-10 mx-auto max-w-7xl text-center">

        <h1 className="font-sans text-[12vw] font-black uppercase leading-[0.75] tracking-[-0.07em] text-[#FFF9F5]">
          LET'S WORK
        </h1>

        <div className="relative mt-5 inline-block">
          <h2
            className="text-7xl font-bold leading-none text-[#25233A] md:text-8xl"
            style={{
              fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
            }}
          >
            together!
          </h2>

        
          <div className="absolute -bottom-5 left-1/2 h-[3px] w-44 -translate-x-1/2 rotate-[-2deg] rounded-full bg-[#25233A]" />
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-lg leading-relaxed text-[#393650]">
          Have a project in mind, an opportunity, or just want to
          <br className="hidden md:block" />
          connect? Feel free to reach out anytime.
        </p>
      </div>

    
      <div className="relative z-10 mx-auto mt-14 flex max-w-6xl flex-col gap-6 lg:flex-row">

      
        <div className="relative flex min-h-[470px] flex-1 items-center overflow-hidden rounded-[0_0_70px_70px] border border-white/30 bg-[#8880D5] px-8 pb-20 pt-28 shadow-[0_25px_60px_rgba(68,59,150,0.18)] md:px-14">

        
          <div
            className="absolute left-[-5%] top-[-1px] h-[95px] w-[110%] bg-[#B8B1F2]"
            style={{
              clipPath:
                "polygon(0 0, 0 58%, 10% 72%, 20% 82%, 30% 86%, 40% 82%, 50% 70%, 60% 48%, 70% 30%, 80% 22%, 90% 30%, 100% 50%, 100% 0)",
            }}
          />

        
          {/* <div className="absolute left-12 top-28 text-4xl text-white/80">
            ∿
          </div> */}

          <div className="relative z-10 w-full ">

           
            <div className="grid gap-4 md:grid-cols-2">


              <div className="relative">
                <label htmlFor="">Name</label>
                <input
                  style={{
                  fontFamily:
                    "'Brush Script MT', 'Segoe Script', cursive",
                }}
                  type="text"
                  placeholder="Alex"
                  className="h-16 w-full rounded-xl border border-white/20 bg-[#FAF9FF] px-5 text-base text-[#393650] outline-none transition placeholder:text-[#9B99A8] focus:ring-2 focus:ring-white/60"
                />
              </div>

              <div className="relative">
                <label htmlFor="">Email</label>
                <input
                  style={{
                  fontFamily:
                    "'Brush Script MT', 'Segoe Script', cursive",
                }}
                  type="email"
                  placeholder="Alex.com@gmail.com"
                  className="h-16 w-full rounded-xl border border-white/20 bg-[#FAF9FF] px-5 text-base text-[#393650] outline-none transition placeholder:text-[#9B99A8] focus:ring-2 focus:ring-white/60"
                />
              </div>
            
              <div className="relative">
                <label htmlFor="">Contact</label>
                <input
                  style={{
                  fontFamily:
                    "'Brush Script MT', 'Segoe Script', cursive",
                }}
                  type="number"
                  placeholder="+91  9876543210"
                  className="h-16 w-full rounded-xl border border-white/20 bg-[#FAF9FF] px-5 text-base text-[#393650] outline-none transition placeholder:text-[#9B99A8] focus:ring-2 focus:ring-white/60"
                />
              </div>

              <div className="relative">
                <label htmlFor="">Address</label>
                <input
                  style={{
                  fontFamily:
                    "'Brush Script MT', 'Segoe Script', cursive",
                }}
                  type="text"
                  placeholder="Agra(UP)"
                  className="h-16 w-full rounded-xl border border-white/20 bg-[#FAF9FF] px-5 text-base text-[#393650] outline-none transition placeholder:text-[#9B99A8] focus:ring-2 focus:ring-white/60"
                />
              </div>

              <div>
                <textarea
                style={{
                  fontFamily:
                    "'Brush Script MT', 'Segoe Script', cursive",
                }} 
                rows={3}
                placeholder="Your Message"
                className="h-36 w-140 resize-none rounded-xl border border-white/20 bg-[#FAF9FF] px-5 py-5 text-base text-[#393650] outline-none transition placeholder:text-[#9B99A8] focus:ring-2 focus:ring-white/60"
                />
              </div>

            </div>

          
            <div className="mt-6 flex justify-center">
              <button className="group rounded-2xl bg-[#FFF9F5] px-7 py-4 text-base font-medium text-[#25233A] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                Let's Start
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

           
            <div className="absolute -bottom-14 left-0 flex w-full items-center gap-5 text-white/80">

              <span className="h-[1px] flex-1 bg-white/40" />

             

              <span className="text-xl">♥</span>
            </div>

          </div>
        </div>

      
        <div className="relative min-h-[470px] w-full overflow-hidden rounded-[35px] border border-white/40 bg-white/10 p-8 shadow-[0_25px_60px_rgba(68,59,150,0.12)] backdrop-blur-md lg:w-[350px]">

  
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#746BCC] text-xl text-white shadow-lg">
              ➤
            </div>

            <div>
              <h3
                className="text-3xl text-[#25233A]"
                style={{
                  fontFamily:
                    "'Brush Script MT', 'Segoe Script', cursive",
                }}
              >
                Get in Touch
              </h3>

              <div className="ml-1 mt-1 h-[2px] w-24 rotate-[-3deg] bg-[#25233A]" />
            </div>

          </div>

      
          <div className="mt-10 space-y-7">

         
            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#746BCC] text-white">
                ✉
              </div>

              <div>
                <p className="text-sm text-white">Email</p>
                <p className="mt-1 text-sm text-[#393650]">
                  example.com@gmail.com
                </p>
              </div>

            </div>

           
            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#746BCC] text-white">
                ☎
              </div>

              <div>
                <p className="text-sm text-white">Phone</p>
                <p className="mt-1 text-sm text-[#393650]">
                  +91 98765 43210
                </p>
              </div>

            </div>

           
            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#746BCC] text-white">
                ●
              </div>

              <div>
                <p className="text-sm text-white">Location</p>
                <p className="mt-1 text-sm text-[#393650]">
                  Agra, India
                </p>
              </div>

            </div>

          </div>

   
          <div className="my-8 h-px bg-white/40" />

         
          <div className="flex gap-4">

            <a
              href="https://github.com/tanusharma630"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub Profile"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#746BCC] text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#6259B8]"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/tanusharma2"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#746BCC] text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#6259B8]"
            >
              in
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#746BCC] text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#6259B8]"
            >
              X
            </a>

          </div>

        
          <div
            className="absolute bottom-8 right-7 max-w-[150px] rotate-[-6deg] text-right text-lg leading-tight text-[#393650]"
            style={{
              fontFamily:
                "'Brush Script MT', 'Segoe Script', cursive",
            }}
          >
            Let's create
            <br />
            something amazing
            <span className="ml-2">↗</span>
          </div>

        </div>
      </div>

    
      <div className="absolute bottom-[-30px] left-[-20px] opacity-30">
        <div className="h-32 w-32 rounded-full border-2 border-white" />
        <div className="absolute left-5 top-5 h-24 w-24 rounded-full border-2 border-white" />
        <div className="absolute left-10 top-10 h-16 w-16 rounded-full border-2 border-white" />
      </div>

      <div className="absolute bottom-0 right-12 text-5xl text-white">
        ✦
      </div>

    </section>
  );
};

export default Contact;