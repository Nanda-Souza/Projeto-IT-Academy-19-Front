import styled from "styled-components"

export default function ScreenMove(){
    
    return (
        <Move>
             
         <div className="container">
                
            <MoveContainer>
             
                <MoveList>

                 <p className="move-text">Transferir Fundos</p>

                 
                  <select class="ui-dropdown">
                   <option value="">Selecione uma conta</option> 
                   <option value="4">Nubank 1234 1500686-2</option>
                   <option value="3">Bradesco 0144 1063530-0</option>
                   <option value="2">Itáu 2569 1267540-7</option>
                   <option value="1">Caixa 3785 4455289-0</option>
                  </select>
                
                  <select class="ui-dropdown">
                   <option value="">Selecione outra conta</option> 
                   <option value="4">Nubank 1234 1500686-2</option>
                   <option value="3">Bradesco 0144 1063530-0</option>
                   <option value="2">Itáu 2569 1267540-7</option>
                   <option value="1">Caixa 3785 4455289-0</option>
                  </select>

                  <input                
                  type="value" 
                  placeholder="Valor" 
                  required
                 /> 
                      

                 <MoveButton>
                  <p id="button" className="button-log">Transferir</p>
                 </MoveButton>


                </MoveList>

            </MoveContainer>

         </div>

        </Move>
    )
}


const Move = styled.div`
    display: flex;
    justify-content: center;
    aligh-itens: center;
    width: 100%;
    min-height: 80vh;
    background-color: #11DCE6;
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        aligh-itens: center;
        border-radius: 5px;
        margin-top:120px;
        margin-left: 20px;
        margin-right: 20px;
        background-color: #FFFFFF;
        width:1600px;
        line-height: 25px;
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: 400;
      }
      @media (max-width: 700px) {
        .container {
          height:70vh;
          margin-top: 20%;
        }
`

const MoveContainer = styled.ul`
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #05AFFC;
        border-radius: 10px;  
        margin-bottom: 6px;
        outline: none;
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: 400;  
        font-size: 20px;
        color: #05AFFC;
        ::placeholder {
            font-family: 'Quicksand', sans-serif;
            font-style: normal;
            font-weight: 400;
            padding-left:15px;
            margin-left: 12px;
            color: #05AFFC;
            font-weight: 400;
            font-size: 20px;
        }
        `

const MoveList = styled.li`
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
.move-text{
   font-family: 'Quicksand', sans-serif;
   font-weight: 600;
   font-size: 22px;
   margin-top: 80px;
   margin-bottom: 20px;
   color: #05AFFC;
}
.ui-dropdown{
    width:300px;
    height:50px;
    margin-bottom:6px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 18px;
    border-radius: 10px;
    border-color: #05AFFC;
    color: #05AFFC;
    background-color: #FFFFFF;
}

`

const MoveButton = styled.li` 
        width: 230px;
        height: 45px;
        background-color: #05AFFC;
        border: 10px solid #05AFFC;
        border-radius: 25px; 
        margin-top: 19px; 
        margin-bottom: 6px;  
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center; 
        `