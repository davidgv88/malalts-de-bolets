function getDbResource(){
    return window.openDatabase("bolets_info", "1.0", "informacio de bolets", 200000);
}

function errorCB(err) {
    console.log(err);
    console.log("Error procesando SQL: "+err.message);
}

function create_tables_sql(tx){
    tx.executeSql('DROP TABLE IF EXISTS bolets_info');
    tx.executeSql('DROP TABLE IF EXISTS conf');
    tx.executeSql('DROP TABLE IF EXISTS comestibilitat');
    tx.executeSql('DROP TABLE IF EXISTS habilitats');
    tx.executeSql('DROP TABLE IF EXISTS habitat');
    tx.executeSql('DROP TABLE IF EXISTS temporada');
    tx.executeSql('DROP TABLE IF EXISTS nivell');
    
    //tx.executeSql('CREATE TABLE IF NOT EXISTS bolets_info (id unique, data)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS bolets_info (id INTEGER, nom,nom_comuns,nom_cientific,descripcio,temporada,habitat,comestibilitat,nivell)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS conf (version)');
    
    tx.executeSql('CREATE TABLE IF NOT EXISTS comestibilitat (id INTEGER,nom)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS habilitats (id INTEGER,nom)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS habitat (id INTEGER,nom)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS temporada (id INTEGER,nom)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS nivell (id INTEGER,nom)');
        
}

function urldecode (str) {
    return decodeURIComponent((str + '').replace(/\+/g, '%20'));
}

var VERSION = "0.8";

