import { categories } from "../data/categories";
import { useState, ChangeEvent, FormEvent } from "react";
import { Activity } from "../data/types";
export default function Form() {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: "",
    calories: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity=()=>{
    const {name, calories}=activity;
    return name.trim()!=='' && calories>0;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    console.log('done')
  }

  //Formulario

  /* Categoria */

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg"
    onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoría
        </label>
        <select
          className="border border-slate-300 
            p-2 
            rounded 
            w-full 
            bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Actividad   */}

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad
        </label>
        <input
          id="name"
          className="border 
        border-slate-300 
        p-2 rounded
        w-full
        bg-white"
          placeholder="Ejemplo: Comida, Jugo de naranjas, Ensalada, Ejercicio, Pesas, etc."
          value={activity.name}
          onChange={handleChange}
        ></input>
      </div>

      {/* Calorias   */}

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorías
        </label>
        <input
          type="number"
          id="calories"
          className="border 
        border-slate-300 
        p-2 rounded
        w-full
        bg-white"
          placeholder="Calorías"
          min={0}
          value={activity.calories}
          onChange={handleChange}
        ></input>

        {/*  Btn enviar */}
        <input
          type="submit"
          className="bg-gray-800
        hover:bg-gray-900
        w-full
        p-2
        font-bold
        uppercase
        text-white
        text-center
        cursor-pointer
        disabled:opacity-10"
          value={activity.category === 1 ? 'Guardar comida' : 'Guardar actividad'}
          disabled={!isValidActivity()}
        />
      </div>
    </form>
  );
}