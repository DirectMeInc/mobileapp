
export const navigate = (_this, screen, params) => {
    params.prevScreen = _this.props.route.name;
    _this.props.navigation.navigate(screen, params);
}
