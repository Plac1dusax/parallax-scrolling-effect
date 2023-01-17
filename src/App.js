import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import "./app.css"

function App() {
  return (
    <>
      <Parallax
        pages={2}
        style={{
          width: "100vw"
        }}
      >
        <ParallaxLayer
          factor={1.5}
          speed={0.5}
          offset={0}
          style={{ zIndex: "-1" }}
        >
          <img
            src={require("./images/background.png")}
            className="background"
          />
        </ParallaxLayer>
        <ParallaxLayer
          speed={1.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "-1",
            objectFit: "cover"
          }}
          offset={0}
        >
          <img src={require("./images/f15e.png")} className="foreground" />
        </ParallaxLayer>
        <ParallaxLayer
          speed={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "-1",
            fontSize: "40px",
            color: "white",
            textShadow: "0 0 5px black"
          }}
          offset={0}
        >
          <div className="title-text">F-15E Strike Eagle</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0}
          factor={2}
          sticky={{ start: 1, end: 2 }}
          style={{
            zIndex: "1",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            minWidth: "95vw",
            fontSize: "24px",
            color: "white",
            backgroundColor: "#333",
            padding: "0.5rem 0.3rem"
          }}
        >
          <div className="content-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, vel
            obcaecati reprehenderit autem iure quisquam, qui rem suscipit
            delectus corrupti error, asperiores dolor neque eum sapiente
            voluptatum facere nemo ullam quis. Praesentium deleniti similique
            pariatur, reprehenderit maiores commodi ratione. Autem esse in
            beatae modi error omnis consequuntur aspernatur provident nihil
            perferendis velit maiores quidem voluptatum placeat atque,
            exercitationem molestiae accusamus possimus. Veniam dolores odio
            doloribus sed optio assumenda! Officia ipsam, pariatur minus
            inventore cumque commodi eum vel! Accusamus velit officia veniam
            dolor? Voluptates iste ad animi doloremque ut possimus consequatur
            quisquam molestiae asperiores unde neque ab vitae placeat
            blanditiis, facere eius vel saepe! Id ad dolorum amet pariatur et
            mollitia possimus in numquam debitis beatae, inventore laboriosam
            repudiandae, quisquam explicabo praesentium neque assumenda, velit
            atque ea commodi. Doloribus quam quibusdam, modi quidem magni
            dolorem maiores aut vero error. Sunt accusamus illum ab voluptatem
            quidem autem consequuntur dolorem reprehenderit unde necessitatibus
            tempora asperiores tenetur dolor quisquam, distinctio ad perferendis
            alias? Voluptatibus pariatur fugiat voluptatem cumque ipsam saepe
            eaque consequuntur blanditiis perspiciatis commodi. Doloribus quidem
            minus quaerat eveniet debitis natus quo voluptate laboriosam sit
            magnam nemo minima error, dicta, dolore nobis incidunt assumenda ad,
            maiores voluptatum ut ducimus? Eveniet perspiciatis, velit dolorum
            cupiditate reprehenderit atque est esse quidem blanditiis amet
            laborum soluta tempora ducimus rem culpa cum quibusdam commodi
            facilis quisquam unde accusantium corrupti deserunt, laboriosam
            voluptatem. Perspiciatis inventore fuga aliquid voluptas quos.
            Suscipit iste hic praesentium quaerat, sed nulla dolore cupiditate
            vel quidem itaque fuga ut, facere voluptas nobis veniam vitae
            explicabo doloribus quasi blanditiis soluta eos voluptates debitis
            impedit illo! Impedit veritatis illo reprehenderit error inventore
            quia perspiciatis. Nisi nostrum commodi nesciunt ut omnis voluptas
            delectus sunt! Architecto asperiores a et eligendi laboriosam,
            possimus aspernatur praesentium labore, accusantium officia nemo,
            accusamus recusandae! Nihil quae voluptate quis quidem. Veniam nulla
            veritatis cupiditate nostrum ad iusto natus praesentium quibusdam
            temporibus! Officia est magni eveniet. Totam quos dolores eligendi
            cumque pariatur possimus minus sed. Fugiat, iure unde aperiam
            nesciunt nihil asperiores dolor? Necessitatibus laboriosam iure
            aliquam accusantium laudantium omnis, velit eos quibusdam corrupti
            beatae excepturi id. Quo, dolor similique sint distinctio sapiente
            iure placeat et nulla quam consectetur excepturi! Soluta mollitia ad
            saepe, autem magnam accusamus odio qui inventore provident fugit
            maxime excepturi dolorum architecto tempora rem eius sed repudiandae
            deserunt id maiores, temporibus doloremque voluptatem? Ipsum iusto,
            itaque labore ad dolore quibusdam! Ab laborum alias quis in atque
            veritatis laudantium voluptatum, eius illo vitae sequi deleniti? Ex
            natus suscipit nobis quasi sint commodi eum sit adipisci quas
            tempora doloribus nostrum, facere fugiat, accusamus id repellendus
            doloremque omnis dignissimos reprehenderit eius. Commodi rem
            necessitatibus fugiat molestias eum asperiores enim vel, tempore, at
            voluptate culpa aut, voluptatem quisquam! Libero tempora aut a
            expedita, ducimus praesentium unde blanditiis, ab animi
            exercitationem facere, magnam porro. Unde totam eos possimus amet
            excepturi, nostrum eveniet! Voluptate alias laborum tenetur sunt
            accusantium autem quaerat harum molestias, dolore iure sint impedit
            cum perspiciatis ipsa ratione? Et nisi facilis minima autem, unde
            tempora a ex expedita officiis sequi deleniti maiores corporis.
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App
