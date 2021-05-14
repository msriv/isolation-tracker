import { useState } from "react";
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css'

const VitalsForm = () => {
    // State
    const [open, setOpen] = useState(false);

    // Component Handlers
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <button onClick={() => setOpen(true)}>Open</button>
            <BottomSheet open={open}>
                <div className="w-11/12 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Temperature <input type="number" name="temperature" className="form-input" /> 
                        </label>
                        <label>
                            Pulse Rate <input type="number" name="temperature" className="form-input" /> 
                        </label>
                        <label>
                            Breathing Difficulty 
                        </label>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-green-400 appearance-none focus:outline-none focus:border-0 hover:border-0 cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer hover:border-0"></label>
                        </div>
                        {/* <label for="toggle" class="text-xs text-gray-700">Toggle me.</label> */}
                    </form>
                </div>
            </BottomSheet>
        </div>
    )
}

export default VitalsForm;