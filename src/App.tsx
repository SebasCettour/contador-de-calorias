import { useReducer, useEffect } from "react";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activity-reducer";
import ActivityList from "../src/components/ActivityList";
import CaloriesTracker from "./components/CaloriesTracker";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = state.activities.length > 0;

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg uppercase text-white font-bold">
            Contador de calorías
          </h1>

          <button
            className="bg-gray-600 
          hover:bg-gray-900
          p-2 font-semibold 
          uppercase
          text-white 
          cursor-pointer 
          rounded-lg 
          text-sm"
            disabled={!canRestartApp}
            onClick={() => dispatch({ type: "restart-app" })}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>

      <section className="bg-gray-800 py-10 rounded-lg">
        <div className="max-w4xl mx-auto">
          <CaloriesTracker activities={state.activities} />
        </div>
      </section>
    </>
  );
}

export default App;
