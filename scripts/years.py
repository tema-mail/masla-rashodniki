import re
def keep(sub):
    """Оставляем поколение, если оно выпускается после 2022 (ключ владельца 23.10.2026: «до 2022 не добавлять»)."""
    s = sub or ''
    m = re.search(r'((?:19|20)\d\d)(?:/\d\d)?\s*[–-]\s*((?:19|20)\d\d)?', s)
    if m:
        end = m.group(2)
        return end is None or int(end) >= 2023
    m = re.search(r'с\s*((?:19|20)\d\d)', s)
    if m: return True
    return None  # год не указан – решать руками
