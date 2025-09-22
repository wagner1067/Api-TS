import PostResponse from "../dtos/post.response";
import PostRequest from "../dtos/post.resquest";
import DataHelper from "../helpers/data.helper";
import IdadeHelper from "../helpers/idade.helper";

export default class PostHandler {

    static buildResponse(input: PostRequest): PostResponse {
        const response: PostResponse = {
            id: Math.random().toString(),
            nome: input.nome,
            email: input.email,
            ehAdulto: IdadeHelper.ehAdulto(parseInt(input.idade)),
            dataCadastro: DataHelper.obterDataAgora()
        };
        return response;
    }
}