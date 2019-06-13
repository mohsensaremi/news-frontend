import {viewRenderer} from 'app/response';

export async function index(ctx) {
    return await viewRenderer(ctx, {});
}
