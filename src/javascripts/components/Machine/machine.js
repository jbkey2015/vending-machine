import './machine.scss';
import smash from '../../helpers/data/smash';


const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((singleMachine) => console.error('1 machine', singleMachine))
    .catch((error) => console.error(error));
// 1. getMachines - returns first machine (hard coding)
// 2. use MachineId to get all postions for that machine
// 3. use MachineId to get all snack postions
// 4. use uid of snack postions/positions to get availabe snacks for that position
// 5. smash em - return an array of positions (in order A1, A2, A3, B1...).
// so positions should have postion. snack if a snack exists at that position
};

export default { buildTheMachine };
