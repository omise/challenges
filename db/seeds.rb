charities = YAML.load_file(Rails.root.join("test", "fixtures", "charities.yml").to_s)

charities.each do |_,c|
  Charity.find_or_create_by(name: c["name"])
end
