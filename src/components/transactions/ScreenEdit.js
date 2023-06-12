import styled from "styled-components"

export default function ScreenEdit(){
   
    return (
        <EditContainer>
             
         <div className="container">
                
            <InputContainer>
             
                <InputList>

                 <p className="register-text">Editar Última Transação</p>

                 <input                
                  type="data"
                  placeholder="27/12/2023"
                  required             
                 />

                 <input                
                  type="catg" 
                  placeholder="Alimentação" 
                  required
                 />

                 <input                
                  type="desc" 
                  placeholder="Alimentação" 
                  required
                 />

                 <input                
                  type="value" 
                  placeholder="542.44" 
                  required
                 /> 

                <EditList>
                  <Edit>
                   <p id="button" className="button-rec">Nova Receita</p>
                  </Edit>

                  <Edit>
                   <p id="button" className="button-desp">Nova Despesa</p>
                  </Edit>
                 </EditList>


                </InputList>

            </InputContainer>

         </div>

        </EditContainer>
    )
}


const EditContainer = styled.div`
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

const InputContainer = styled.ul`
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

const InputList = styled.li`
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
.register-text{
   font-family: 'Quicksand', sans-serif;
   font-weight: 600;
   font-size: 22px;
   margin-top: 80px;
   margin-bottom: 20px;
   color: #05AFFC;
}

`
const EditList = styled.div`
display: flex;
flex-direction: row;

`

const Edit = styled.button` 
        width: 135px;
        height: 45px;
        background-color: #05AFFC;
        border: 10px solid #05AFFC;
        border-radius: 25px; 
        margin-top: 19px; 
        margin-bottom: 6px;  
        margin-right: 5px;
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
             
        `
     
    