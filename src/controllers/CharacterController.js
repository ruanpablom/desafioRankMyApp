import axios from 'axios';

class CharacterController{
  async index(req, res){
    let { page, limit } = req.query;
    page = !page ? 1 : page;
    limit = !limit ? 2 : limit;
    try{
      const rickAndMortyApiRequest = await axios(`https://rickandmortyapi.com/api/character/?page=1`);

      const results = rickAndMortyApiRequest.data.results;

      const info = {
        count: results.length,
        pages: Math.ceil(results.length/limit)
      }

      const data = {
        info,
        results: results.slice(limit*(page -1), limit*page )
      }
      
      res.status(200).json(data);
    } catch(err){
      return res.status(400).send({error: err});
    }
  }

  async show(req, res){
    const { id } = req.params; 
    
    try{
      const rickAndMortyApiRequest = await axios(`https://rickandmortyapi.com/api/character/${id}`);
      res.status(200).json(rickAndMortyApiRequest.data);
    }catch(err){
      return res.status(400).json({error: 'Error to get data'});
    }
  }
}

export default new CharacterController();