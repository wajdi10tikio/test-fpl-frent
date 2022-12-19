import React, { useEffect, useState } from 'react'
import Axios from "axios"

function addCategorie() {
  const [loading, setLoading] = useState(false)
  const [nomcategorie, setNomcategorie] = useState("")
  const [listeDesLivres, setListeDesLivres] = useState([{}])
  const [livre, setLivre] = useState([])

  useEffect(() => {
    async function getLivre() {
      const res = await Axios.get("http://localhost:6100/livres")
      console.log("data livres", res.data.reverse())
      setLivre(res.data.reverse())
    }
    getLivre();
  }, [])
  const handleAddCategorie = async () => {

    addCategorie(nomcategorie, listeDesLivres)

  }
  const addCategorie = async (nomcategorie, listeDesLivres) => {
    try {
      setLoading(true)
      const result = await Axios.post(
        "http://localhost:6100/categorie/add", { nomcategorie, listeDesLivres })
      console.log(result.data.reverse())
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }
  return (
    <div className="app">
      <h1>ADD LIVRES</h1>
      <label>Nom categorie</label>
      &nbsp;
      <input className="input" placeholder="Nom categorie" value={nomcategorie} onChange={(e) => setNomcategorie(e.target.value)} />
      &emsp;
      <label>List des Livres</label>
      &nbsp;
      <select
        showSearch
        style={{ width: 100 }}
        optionFilterProp="children"
        onChange={(value) => setListeDesLivres([{ value }])}
      >
        {livre?.map(elt => <option value={elt._id}>{elt.titre}</option>)}

      </select>
      &nbsp;
      <button type="primary" onClick={handleAddCategorie}>
        Add categorie
      </button>
      <br />
      <br />
      <br />
    </div>
  );
}

export default addCategorie
