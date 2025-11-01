import { Region, RegionAssociations } from './Region';
import { RegionUser, RegionUserAssociations } from './RegionUser';
import { User, UserAssociations } from './User';
import { SessionToken, SessionTokenAssociations } from './SessionToken';

const MODELS = {
 Region,
 RegionUser,
 User,
 SessionToken,
}

const MODEL_ASSOCIATIONS = {
 Region: RegionAssociations,
 RegionUser: RegionUserAssociations,
 User: UserAssociations,
 SessionToken: SessionTokenAssociations,
}

export { MODELS, MODEL_ASSOCIATIONS };
