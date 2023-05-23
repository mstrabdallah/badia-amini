import useTranslation from "next-translate/useTranslation"

export default function MsgApi({ apiErrors }) {
    const { t } = useTranslation('common')

    return (
        !apiErrors?.errors && (apiErrors?.message && apiErrors?.message != '') &&
        <div className="ApiError">
            {t(apiErrors?.message)}
        </div>
    )
} 