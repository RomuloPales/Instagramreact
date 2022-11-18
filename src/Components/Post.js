import { useState } from "react"

function Post(props){
  const [taSalvo, setTasalvo] = useState(false)
  const [foiCurtido, setFoiCurtido] = useState (false)
  const [contador, setContador] = useState(props.initialLikesAmount)
  function salvo(){
    setTasalvo(!taSalvo)

  }
  function curtido(){
    setFoiCurtido(!foiCurtido)
    if(!foiCurtido){
      setContador(contador +1)
    }else{
      setContador(contador -1)
    }
   
  }
  return (
    <div class="post" data-test="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.userImage} />
              {props.userName}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo" data-test="post-image">
            <img src={props.contentImage}/>
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                {foiCurtido ?  <ion-icon onClick={curtido} class ="curtido" name="heart" data-test="like-post"></ion-icon> : <ion-icon onClick={curtido} name="heart-outline" data-test="like-post"></ion-icon> 
                 }
                <ion-icon name="chatbubble-outline" ></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                {taSalvo ? <ion-icon onClick={salvo} name="bookmark" data-test="save-post"></ion-icon> : <ion-icon onClick={salvo} name="bookmark-outline" data-test="save-post"></ion-icon>
                 }
               
              </div>
            </div>

            <div class="curtidas">
              <img src={props.likedByImage} />
              <div class="texto" >
                Curtido por <strong >{props.likedByText}</strong> e{" "}
                <strong data-test="likes-number">{contador}</strong>
              </div>
            </div>
          </div>
        </div>

  )
}

export default function Posts(){

  const posts = [
    {
        userName: "meowed",
        userImage: "assets/img/meowed.svg",
        contentImage: "assets/img/gato-telefone.svg",
        likedByImage: "assets/img/respondeai.svg",
        likedByText: "respondeai",
        initialLikesAmount: 101523
    },
    {
        userName: "barked",
        userImage: "assets/img/barked.svg",
        contentImage: "assets/img/dog.svg",
        likedByImage: "assets/img/adorable_animals.svg",
        likedByText: "adorable_animals",
        initialLikesAmount: 200541
    }
    
  ]

    return (

        <div class="posts">
          {posts.map((p)=> <Post
           userName= {p.username}
           userImage= {p.userImage}
           contentImage= {p.contentImage}
           likedByImage= {p.likedByImage}
           likedByText = {p.likedByText}
           initialLikesAmount = {p.initialLikesAmount}
          
          />)}
      </div>

    )

}