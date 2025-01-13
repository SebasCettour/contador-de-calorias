import { Activity } from "../data/types";
import { categories } from "../data/categories";

type ActivityListProps = {
  activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListProps) {
  // Función para obtener el nombre de la categoría
  const getCategoryName = (categoryId: Activity["category"]) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Categoría desconocida";
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {activities.map((activity) => (
        <div
          key={activity.id}
          className="p-5 py-10 bg-white mt-5 flex justify-between"
        >
          <div className="space-y-2 relative">
            {/* Clase dinámica para el color */}
            <p
              className={`absolute -top-8 -left-5 px-10 py-2 uppercase text-white font-semibold ${
                activity.category === 1 ? "bg-lime-500" : "bg-orange-500"
              }`}
            >
              {getCategoryName(activity.category)}
            </p>

            <p className="text-2xl font-bold pt-5">{activity.name}</p>

            <p className="font-black text-4xl text-lime-500">
              {activity.calories}{" "}
              <span>Calorías</span>
            </p>
          </div>

          <div></div>
        </div>
      ))}
    </>
  );
}
