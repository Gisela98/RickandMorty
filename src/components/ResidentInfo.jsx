import axios from 'axios'

import useCharacterApi from './hooks/CharacterApi'

const ResidentInfo = ({ resident }) => {

  const character = useCharacterApi(resident)

  return (
    <div className='cardcharacter'>
      <div className='character-info__container'>
        <img src={character?.image} alt="" />
        <div >
          <ul>
            <li>Name: <span>{character?.name}</span></li>
            <li>Status: <div className='status' style={{ background: character?.status === "Alive" ? "green" : character?.status === "Dead" ? "red" : "gray" }}> </div>
              <span> {character?.status}</span></li>
            <li>Origin: <span>{character?.origin?.name}</span></li>
            <li>Episode where appears: <span>{character?.episode?.length}</span></li>
          </ul>
        </div>

      </div>
    </div >

  );
};


export default ResidentInfo