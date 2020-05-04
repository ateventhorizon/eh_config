class GlobalConfig {
  constructor(lMongoDBUser, lMongoDBPass, lMongoDBURI, lMongoDBdbName, lMongoDBReplicaSetName, lJWTSecret, lSendGrid, lCloudHost, lTokenCookie, lAntiForgeryTokenCookie, lJwtExpiresSeconds, lReactHost, lFileRoot, lStelleStricePK, lStelleStriceSK) {
    this.MongoDBUser = lMongoDBUser;
    this.MongoDBPass = lMongoDBPass;
    this.MongoDBURI = lMongoDBURI;
    this.MongoDBdbName = lMongoDBdbName;
    this.MongoDBReplicaSetName = lMongoDBReplicaSetName;
    this.mJWTSecret = lJWTSecret;
    this.mSendGrid = lSendGrid;
    this.CloudHost = lCloudHost;
    this.TokenCookie = lTokenCookie;
    this.AntiForgeryTokenCookie = lAntiForgeryTokenCookie;
    this.JwtExpiresSeconds = Number(lJwtExpiresSeconds);
    this.ReactHost = lReactHost
    this.fileRoot = lFileRoot
    this.stelleStricePK = lStelleStricePK;
    this.stelleStriceSK = lStelleStriceSK;
  }

  get FileRoot() {
    return this.fileRoot;
  }

  get StelleStricePK() {
    return this.stelleStricePK;
  }

  get StelleStriceSK() {
    return this.stelleStriceSK;
  }

  get JWTSecret() {
    return this.mJWTSecret;
  }

  get SendGrid() {
    return this.mSendGrid;
  }
}

const gc = new GlobalConfig(
  process.env.EH_MONGO_USER
  , process.env.EH_MONGO_PASSWORD
  , process.env.EH_MONGO_PATH
  , process.env.EH_MONGO_DEFAULT_DB
  , process.env.EH_MONGO_REPLICA_SET_NAME
  , process.env.EH_MASTER_TOKEN
  , process.env.EH_SEND_GRID_TOKEN
  , process.env.EH_CLOUD_HOST
  , process.env.EH_TOKEN_COOKIE
  , process.env.EH_ANTIFORGERYTOKEN_COOKIE
  , process.env.EH_JWT_EXPIRES_SECONDS
  , process.env.REACT_APP_EH_CLOUD_HOST
  , process.env.EH_FILE_ROOT
  , process.env.EH_STELLE_E_STRISCE_PK
  , process.env.EH_STELLE_E_STRISCE_SK
);

module.exports = gc;

