charities = YAML.load_file(Rails.root.join("test", "fixtures", "charities.yml").to_s)

app = App.new

charities.each do |_,c|
  unless Charity.exists?(name: c["name"])
    app.create_charity(name: c["name"])
  end
end
