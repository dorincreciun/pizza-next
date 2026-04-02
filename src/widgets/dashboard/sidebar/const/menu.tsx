import { DASHBOARD_ROUTES } from "@shared/const"
import {
    ChartBarStacked,
    ClipboardList,
    LayoutDashboard,
    Package,
    Settings,
    Soup,
} from "lucide-react"

export const MENU_GROUPS = [
    {
        group: "General",
        items: [
            { label: "Dashboard", to: DASHBOARD_ROUTES.HOME, icon: <LayoutDashboard size={18} /> },
            { label: "Comenzi", to: DASHBOARD_ROUTES.ORDERS, icon: <ClipboardList size={18} /> },
        ],
    },
    {
        group: "Gestiune Catalog",
        items: [
            { label: "Produse", to: DASHBOARD_ROUTES.PRODUCTS, icon: <Package size={18} /> },
            {
                label: "Categorii",
                to: DASHBOARD_ROUTES.CATEGORIES,
                icon: <ChartBarStacked size={18} />,
            },
            { label: "Ingrediente", to: DASHBOARD_ROUTES.INGREDIENTS, icon: <Soup size={18} /> },
        ],
    },
    {
        group: "Administrare",
        items: [{ label: "Setari", to: DASHBOARD_ROUTES.SETTINGS, icon: <Settings size={18} /> }],
    },
]
