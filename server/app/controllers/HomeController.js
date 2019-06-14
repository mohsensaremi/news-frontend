import {viewRenderer} from 'app/response';

export async function index(ctx) {
    return await viewRenderer(ctx, {});
}

export async function storeAuthToken(ctx) {
    const {token} = ctx.request.query;
    ctx.body=`
    <script type="application/javascript">
    window.localStorage.setItem('userToken',"${token}");
    window.location.href="/";
</script>
    `.trim()
}
