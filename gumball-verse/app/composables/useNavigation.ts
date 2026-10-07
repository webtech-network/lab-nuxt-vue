export function useNavigation() {
    const route = useRoute();

    const links = [
        { to: '/', label: 'Início' },
        { to: '/characters', label: 'Personagens' },
        { to: '/locations', label: 'Lugares' },
        { to: '/about', label: 'Sobre' },
    ];

    function isActive(path: string) {
        if (path === '/') {
            return route.path === '/';
        }

        return route.path === path || route.path.startsWith(`${path}/`);
    }

    return { links, isActive };
}
