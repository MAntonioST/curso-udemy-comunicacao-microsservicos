import UserRepository from "../repository/UserRepository";
import * as httpStatus from '../../../config/constants/httpStatus';
import UserException from "../exception/UserException";

class UserService {

    async findByEmail(req) {
        try {
            const { email } = req.params;
            this.validateRequesData(email);
            let user =  await UserRepository.findByEmail(email);
            this.validateUserNotFound(user);
            return {
                status: httpStatus.SUCCESS,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            }
        } catch (error) {
            return {
                status: error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }

    }

    validateRequesData(email){
        if(!email){
            throw new UserException(
                httpStatus.BAD_REQUEST,
                'User email was not informed.');
        }
    }

    validateUserNotFound(user){
        if(!user){
            throw new UserException(
                httpStatus.BAD_REQUEST,
                'User was not found.');
        }
    }


}

export default new UserService();