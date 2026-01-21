import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:process.env.DB_FILE_NAME
})

export async function initDB(){
  try{
    await sequelize.sync()
    console.log(`Database Is Running.`);
    
  } catch(err){
    console.error(`Database Is Not Working Correctly!`);
    
  } 
}

export default sequelize